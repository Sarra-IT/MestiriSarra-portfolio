import React, { useState, useRef, useEffect } from 'react'
import { SendHorizontal, Trash, Bot, User } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { chatContext } from '@/config/chatContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const Chat: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fix for Vite env import typing issue:
  const apiKey = import.meta.env?.VITE_GOOGLE_API_KEY as string || ''
  const hasApiKey = Boolean(apiKey && apiKey.trim().length > 0)
  
  // Debug logging
  console.log('API Key loaded:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND')
  console.log('Has API Key:', hasApiKey)

  const scrollToBottom = () => {
    const chatContainer = messagesEndRef.current?.parentElement
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Keep input focused
    inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentInput = input.trim()
    if (!currentInput || isLoading) return
    
    // Clear input immediately
    setInput('')
    
    // Make sure input keeps focus
    inputRef.current?.focus()

    if (!hasApiKey) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Chat is disabled because no API key is configured. Please set VITE_GOOGLE_API_KEY and reload.',
          timestamp: new Date(),
        },
      ])
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: currentInput,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const genAI = new GoogleGenerativeAI(apiKey)
      const candidateModels = [
        'gemini-2.0-flash',
      ]

      let responseText = ''
      let lastError: unknown = null

      for (const modelId of candidateModels) {
        try {
          const model = genAI.getGenerativeModel({ model: modelId })
          const chat = model.startChat({
            history: [
              {
                role: 'user',
                parts: [{ text: chatContext }],
              },
              {
                role: 'model',
                parts: [{ text: 'I understand the context and will use it to provide accurate responses.' }],
              },
              ...messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }],
              })),
            ],
          })

          const result = await chat.sendMessage(currentInput)
          const response = await result.response
          responseText = response.text()
          // success, break out
          break
        } catch (err: Error | unknown) {
          lastError = err
          const msg: string = err instanceof Error ? err.message : ''
          // If this model isn't available/supported, try the next one
          if (
            msg.includes('not found') ||
            msg.includes('is not supported') ||
            msg.includes('404')
          ) {
            continue
          }
          // Other errors should stop the loop
          throw err
        }
      }

      if (!responseText) {
        // No model succeeded; surface the last error message if any
        const msg = lastError instanceof Error ? lastError.message : 'No supported Gemini model available.'
        throw new Error(msg)
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error: unknown) {
      console.error('Chat API Error:', error)
      const errorDetails = error instanceof Error ? error.message : 'Unknown error'
      console.error('Error details:', errorDetails)
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.'
      
      if (errorDetails.includes('API key') || errorDetails.includes('authentication')) {
        errorMessage = 'API key issue: Please check your VITE_GOOGLE_API_KEY in .env file.'
      } else if (errorDetails.includes('quota') || errorDetails.includes('limit')) {
        errorMessage = 'API quota exceeded. Please try again later.'
      } else if (errorDetails.includes('network') || errorDetails.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const clearMessages = () => {
    setMessages([])
  }


  return (
    <Card className="h-[420px] grid grid-rows-[auto_1fr] overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
           <Bot className="size-7" />
          Support IA
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-rows-[1fr_auto] p-0 overflow-hidden">
        <div 
          className="overflow-y-auto px-4 py-2 space-y-4 custom-scrollbar" 
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent'
          }}
        >
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground text-sm">
              <p>Hi! I'm your AI assistant.</p>
              <p>Ask me anything about Sarra's work and background!</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex gap-2',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'flex gap-2 max-w-[80%]',
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  {message.role === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-lg bg-muted px-3 py-2 text-sm">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-0" />
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="flex gap-1 border-t p-2 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/80"
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearMessages}
            disabled={messages.length === 0}
            className="px-3"
          >
            <Trash className="h-4 w-4 text-rose-500" />
          </Button>
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 bg-gray-100 hover:bg-gray-50 focus:bg-white transition-colors"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="sm"
            disabled={!input.trim() || isLoading}
            className="px-3"
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Add this CSS to your global styles or create a new style block
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
  }
`

export default Chat


