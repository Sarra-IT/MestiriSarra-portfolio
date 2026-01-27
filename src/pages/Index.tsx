import { Code,Coffee,Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Cloud, GitBranch, Smartphone, Terminal, Sparkles, Briefcase, GraduationCap, FileDown } from "lucide-react";
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
      title: "Jeu vidéo de type plateforme",
      description: "Développement d’un jeu en 2D avec Pygame, mettant en œuvre des concepts de physique et d’animation.",
      tags: ["Python", "Pygame"],
      size: "large"
    },
    {
      title: "Logiciel de gestion de ventes informatiques",
      description: "Application de bureau développée en Java pour gérer les ventes, produits et clients d’un service informatique.",
      tags: ["Java"],
      size: "medium"
    },
    {
      title: "Site web E-commerce",
      description: "Création d’un site de vente en ligne responsive, avec intégration du front-end et du back-end.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      size: "medium"
    },
    {
      title: "Application de gestion de location de films et séries",
      description: "Développement d’un programme complet en C pour gérer la location et le suivi des films et séries.",
      tags: ["C"],
      size: "small"
    },
    {
      title: "Réseau virtuel sécurisé",
      description: "Conception et configuration d’un réseau virtuel sécurisé à l’aide des outils Cisco.",
      tags: ["Cisco", "Networking"],
      size: "small"
    }
  ];



const experiences = [
  {
    role: "Employée polyvalente Restauration",
    company: "Calorie Boumiza Square",
    period: "2023 - 2024",
    description:
      "-Accueillir et conseiller les clients\n-Gérer son temps et prioriser les tâches\n-Gérer les stocks et assurer leur réapprovisionnement\n-Être responsable de la caisse"
  },
  {
    role: "Fondatrice et gestionnaire",
    company: "Fripystreetwear",
    period: "2023 - 2024",
    description:
      "Création et gestion d’une friperie en ligne. Promotion sur les réseaux sociaux, gestion des stocks et planification financière."
  },
  {
    role: "Cours particuliers",
    company: "Indépendante",
    period: "2022-2024",
    description:
      "Adapter les méthodes pédagogiques au niveau de chaque élève"
  },
 
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
                      <p className="text-sm text-black font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {education.map((edu, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-black">{edu.degree}</h3>
                      <p className="text-sm text-black font-medium">{edu.school}</p>
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
                  <span className="text-sm mt-2 text-black">C</span>
                </div>
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Html/Css/Js</span>
                </div>
                <div className="flex flex-col items-center">
                  <Coffee className="w-8 h-8 text-[#773cf5] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 text-[#06B6D4] transition-transform transform hover:rotate-12 duration-200" />
                  
                  <span className="text-sm mt-2">React</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Server className="w-8 h-8 text-[#339933] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Cisco</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wind className="w-8 h-8 transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Vhdl</span>
                </div>
                <div className="flex flex-col items-center">
                
                <Database className="w-8 h-8 text-[#47A248] transition-transform transform hover:rotate-12 duration-200" />
                  <span className="text-sm mt-2">Sql</span>
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
          © 2026 Sarra Mestiri.
        </p>
      </footer>
    </div>
  );
};

export default Index;
