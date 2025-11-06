import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Cloud, GitBranch, Smartphone, Terminal, Sparkles, Briefcase, GraduationCap, FileDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode2, Wind, Server, FileJson,} from "lucide-react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/sarra.png";
import Chat from "@/components/Chat";

const Index = () => {
  const projects = [
    {
      title: "Project Sakura",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      size: "large"
    },
    {
      title: "UI Component Library",
      description: "Reusable component library with TypeScript",
      tags: ["TypeScript", "React", "Storybook"],
      size: "medium"
    },
    {
      title: "API Dashboard",
      description: "Analytics dashboard for monitoring APIs",
      tags: ["Vue.js", "D3.js"],
      size: "medium"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application",
      tags: ["React Native", "Firebase"],
      size: "small"
    },
    {
      title: "DevTools Extension",
      description: "Browser extension for developers",
      tags: ["JavaScript", "Chrome API"],
      size: "small"
    }
  ];



const experiences = [
  {
    role: "Projets du cycle ingénieur",
    company: "École Supérieure d'Électronique de l’Ouest (ESEO)",
    period: "2025 - 2026",
    description:
      "Réalisation de projets académiques tels qu’une gâche électrique automatique et un radar de recul pour véhicule utilisant la technologie à ultrasons. Familiarisation avec les systèmes Linux et la programmation embarquée."
  },
  {
    role: "Fondatrice et gestionnaire",
    company: "Fripystreetwear",
    period: "2023 - 2024",
    description:
      "Création et gestion d’une friperie en ligne. Promotion sur les réseaux sociaux, gestion des stocks et planification financière."
  },
  {
    role: "Professeure particulière",
    company: "Indépendante",
    period: "2023",
    description:
      "Dispense de cours particuliers adaptés au niveau et au rythme de chaque élève, en privilégiant une approche personnalisée."
  },
  {
    role: "Employée polyvalente",
    company: "Secteur de la restauration",
    period: "2022 - 2023",
    description:
      "Accueil et conseil des clients, gestion de la caisse, suivi des stocks et organisation efficace des tâches."
  }
];

const education = [
  {
    degree: "Cycle Ingénieur (1ʳᵉ année)",
    school: "École Supérieure d'Électronique de l’Ouest (ESEO)",
    period: "2025 - 2026",
    description:
      "Études d’ingénierie en électronique et informatique. Réalisation de projets techniques liés aux systèmes embarqués et à l’automatisation."
  },
  {
    degree: "Classe préparatoire intégrée TIC",
    school: "École Polytechnique de Sousse",
    period: "2023 - 2025",
    description:
      "Formation préparatoire axée sur les technologies de l’information et de la communication, la programmation et la conception de projets informatiques."
  },
  {
    degree: "Baccalauréat en Sciences Expérimentales",
    school: "Lycée Les Élites 2, Sousse",
    period: "2022 - 2023",
    description:
      "Obtention du baccalauréat avec spécialisation en sciences expérimentales."
  },
  {
    degree: "Certifications",
    school: "Cisco et autres plateformes",
    period: "2023 - 2025",
    description:
      "Certifiée en CCNA (Cisco), en développement Web (HTML, CSS, JS, PHP) et en programmation Java."
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Bento Grid Container */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* Hero Section - Large */}
          <Card className="lg:col-span-8 lg:row-span-2 p-8 lg:p-12 border-border bg-card shadow-elegant animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
              <div className="flex-none">
                <div className="w-50 h-50 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-primary/20 bg-card shadow-elegant ring-1 ring-primary/10">
                  <img                    
                    src={heroImage}
                    alt=" avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-black">
                  Salut, je suis <span className="text-blue-900">Sarra</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionnée par l’informatique et les technologies, je recherche un stage technique en développement logiciel et sciences des données pour mettre en pratique mes compétences. Curieuse et motivée, j’aime transformer les idées en solutions concrètes et innovantes.
                </p>
                <div className="flex gap-4" style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle' }}>
                   <a href="https://github.com/sarra-IT" target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/sarra-mestiri" target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:it.sarramestiri@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 ">
                      Resume
                      <FileDown className="ml-2 size-5" />
                    </Button>
                  </a>
                </div>
                
              </div>

            </div>
          </Card>

          {/* chat Card - Medium */}
          <div className="lg:col-span-4 lg:row-span-2">
            <Chat />
          </div>

          {/* Projects Carousel */}
          <Card className="lg:col-span-7 lg:row-span-1 p-8 border-border bg-card shadow-elegant">
            <h2 className="text-2xl font-bold text-black mb-6">Projets</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-black">
                          {project.title}
                        </h3>
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                      </div>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-gray-300 bg-gray-100 hover:bg-gray-200" />
              <CarouselNext className="border-gray-300 bg-gray-100 hover:bg-gray-200" />
            </Carousel>
          </Card>



          {/* Experience/Education Toggle */}
          <Card className="lg:col-span-5 lg:row-span-2 p-8 border-border bg-card shadow-elegant">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="experience" className="text-sm">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-sm">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {experiences.map((exp, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {education.map((edu, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black">{edu.degree}</h3>
                      <p className="text-sm text-primary font-medium">{edu.school}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
          <Card className="lg:col-span-7 lg:row-span-1 p-8 border-border bg-card shadow-elegant flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-black mb-4">Skills</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Code2 className="w-8 h-8 text-gray-700 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2 text-gray-700">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileCode2 className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <FileJson className="w-8 h-8 text-[#3178C6] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 text-[#06B6D4] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Tailwind</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Server className="w-8 h-8 text-[#339933] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wind className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <Database className="w-8 h-8 text-[#47A248] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <GitBranch className="w-8 h-8 text-[#F05032] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Git</span>
                </div>
              </div>

            </div>
          </Card>

          


        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-6 border-t border-border">
        <p className="text-center text-muted-foreground text-sm">
          © 2025 Sarra Mestiri.
        </p>
      </footer>
    </div>
  );
};

export default Index;
