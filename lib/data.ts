/* --------------------------------------------------------
   Portfolio data – technologies, experience, education, projects
   -------------------------------------------------------- */

export type TechCategory =
  | "languages"
  | "frameworks"
  | "databases"
  | "messaging"
  | "integration"
  | "containers"
  | "visualization"
  | "cloud"

export interface Technology {
  name: string
  category: TechCategory
  icon: string // simple-icons slug or devicon URL
}

export const technologies: Technology[] = [
  { name: "Java", category: "languages", icon: "java" },
  { name: "Python", category: "languages", icon: "python" },
  { name: "JavaScript", category: "languages", icon: "javascript" },
  { name: "Spring Boot", category: "frameworks", icon: "springboot" },
  { name: "NestJS", category: "frameworks", icon: "nestjs" },
  { name: "Node.js", category: "frameworks", icon: "nodejs" },
  { name: "Next.js", category: "frameworks", icon: "nextjs" },
  { name: "React", category: "frameworks", icon: "react" },
  { name: "MongoDB", category: "databases", icon: "mongodb" },
  { name: "PostgreSQL", category: "databases", icon: "postgresql" },
  { name: "MySQL", category: "databases", icon: "mysql" },
  { name: "OracleDB", category: "databases", icon: "oracle" },
  { name: "Kafka", category: "messaging", icon: "kafka" },
  { name: "Apache NiFi", category: "integration", icon: "apache" },
  { name: "Apache Airflow", category: "integration", icon: "apacheairflow" },
  { name: "Docker", category: "containers", icon: "docker" },
  { name: "Streamlit", category: "visualization", icon: "streamlit" },
  { name: "Plotly", category: "visualization", icon: "plotly" },
  { name: "Scikit-learn", category: "visualization", icon: "scikitlearn" },
  { name: "Power BI", category: "visualization", icon: "powerbi" },
  { name: "AWS S3", category: "cloud", icon: "amazons3" },
  { name: "Google Cloud", category: "cloud", icon: "googlecloud" },
  { name: "Azure", category: "cloud", icon: "microsoftazure" },
]

export interface ExperienceItem {
  id: string
  title: { es: string; en: string }
  company: string
  type: { es: string; en: string }
  startDate: string // yyyy-MM
  endDate: string | null // null = present
  location: { es: string; en: string }
  description: { es: string[]; en: string[] }
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: "data-engineer",
    title: { es: "Data Engineer", en: "Data Engineer" },
    company: "Ikitech Solutions",
    type: { es: "Tiempo completo", en: "Full-time" },
    startDate: "2025-04",
    endDate: null,
    location: { es: "Remoto", en: "Remote" },
    description: {
      es: [
        "Visualizacion interactiva de datos para analitica de salud: Disene y construi plataformas de visualizacion de datos interactivos usando Streamlit, Plotly y Pandas para analitica del sector salud.",
        "Modelado predictivo para analisis de tendencias medicas: Desarrolle modelos predictivos con Scikit-learn para identificar tendencias medicas y apoyar decisiones estrategicas usando modelos de regresion.",
        "Componentes reutilizables para monitoreo de KPI en tiempo real: Cree componentes modulares y reutilizables para monitoreo de KPI en tiempo real.",
      ],
      en: [
        "Interactive Data Visualization for Healthcare Analytics: Designed and built interactive data visualization platforms using Streamlit, Plotly, and Pandas for healthcare analytics.",
        "Predictive Modeling for Medical Trend Analysis: Developed predictive models with Scikit-learn to identify medical trends and support strategic decisions using regression models.",
        "Reusable Components for Real-Time KPI Monitoring: Created modular, reusable components for real-time KPI monitoring.",
      ],
    },
    technologies: ["Airflow", "Python", "Power BI", "Streamlit", "Plotly", "MongoDB", "NiFi", "Docker", "PostgreSQL"],
  },
  {
    id: "java-developer",
    title: { es: "Java Developer", en: "Java Developer" },
    company: "Ikitech Solutions",
    type: { es: "Tiempo completo", en: "Full-time" },
    startDate: "2024-11",
    endDate: "2025-04",
    location: { es: "Remoto", en: "Remote" },
    description: {
      es: [
        "Desarrollo de APIs: Disene e implemente APIs RESTful reactivas usando Java y Spring Boot WebFlux/Security, entregando servicios de alto rendimiento y no bloqueantes optimizados para rendimiento.",
        "Consultoria tecnica: Proporcione guia experta en Clean Architecture e integracion de microservicios con Kafka y ActiveMQ, mejorando la calidad del codigo, eficiencia del equipo y escalabilidad de las soluciones.",
        "Entrenamiento intensivo: Participe en capacitacion de Java reactivo usando Spring, fortaleciendo mis habilidades en desarrollo de APIs REST y microservicios.",
      ],
      en: [
        "API Development: Designed and implemented reactive RESTful APIs using Java and Spring Boot WebFlux/Security, delivering high-throughput, non-blocking services optimized for performance.",
        "Technical Consulting: Provided expert guidance on Clean Architecture and microservices integration with Kafka and ActiveMQ, improving code quality, team efficiency, and solution scalability.",
        "Intensive Training: Participated in reactive Java training using Spring, which strengthened my skills in developing REST APIs and microservices.",
      ],
    },
    technologies: ["Java", "Spring Boot", "Kafka", "ActiveMQ", "Docker", "PostgreSQL"],
  },
  {
    id: "dba",
    title: { es: "DBA", en: "DBA" },
    company: "Ikitech Solutions",
    type: { es: "Tiempo completo", en: "Full-time" },
    startDate: "2024-09",
    endDate: "2024-11",
    location: { es: "Remoto", en: "Remote" },
    description: {
      es: [
        "Gestion critica de datos: Gestione la base de datos del ICFES, garantizando la integridad y disponibilidad de informacion esencial para evaluaciones nacionales.",
      ],
      en: [
        "Critical Data Management: Managed the ICFES database, ensuring the integrity and availability of essential information for national assessments.",
      ],
    },
    technologies: ["PostgreSQL", "OracleDB", "SQL"],
  },
]

export interface EducationItem {
  id: string
  degree: { es: string; en: string }
  institution: string
  location: string
  startDate: string
  endDate: string | null
}

export const educationItems: EducationItem[] = [
  {
    id: "ufps",
    degree: { es: "Ingenieria de Sistemas", en: "Systems Engineering" },
    institution: "Universidad Francisco de Paula Santander",
    location: "Ocana",
    startDate: "2023-08",
    endDate: null,
  },
  {
    id: "programate",
    degree: { es: "Desarrollo Web Junior", en: "Junior Web Development" },
    institution: "Programate School",
    location: "Ibague",
    startDate: "2022-04",
    endDate: "2022-11",
  },
  {
    id: "sena",
    degree: { es: "Tecnico en Asistencia Administrativa", en: "Administrative Assistance Technician" },
    institution: "SENA",
    location: "Ibague",
    startDate: "2021-01",
    endDate: "2022-11",
  },
]

export interface ProjectItem {
  id: string
  title: string
  shortDesc: { es: string; en: string }
  fullDesc: { es: string; en: string }
  challenges: { es: string[]; en: string[] }
  learnings: { es: string[]; en: string[] }
  features: { es: string[]; en: string[] }
  technologies: string[]
  github: string
  image: string
  code: string
}

export const projects: ProjectItem[] = [
  {
    id: "crud-spring",
    title: "CRUD con Spring Boot",
    shortDesc: {
      es: "API RESTful para gestion de recursos con Spring Boot y PostgreSQL",
      en: "RESTful API for resource management with Spring Boot and PostgreSQL",
    },
    fullDesc: {
      es: "Esta API RESTful proporciona un conjunto completo de operaciones CRUD para la gestion de recursos empresariales. Desarrollada con Spring Boot, ofrece un rendimiento optimo y una arquitectura escalable para aplicaciones empresariales.",
      en: "This RESTful API provides a complete set of CRUD operations for enterprise resource management. Built with Spring Boot, it offers optimal performance and a scalable architecture for enterprise applications.",
    },
    challenges: {
      es: [
        "Implementacion de un sistema de cache para mejorar el rendimiento",
        "Diseno de una estructura de permisos granular",
        "Optimizacion de consultas para grandes volumenes de datos",
      ],
      en: [
        "Implementation of a caching system to improve performance",
        "Design of a granular permissions structure",
        "Query optimization for large data volumes",
      ],
    },
    learnings: {
      es: [
        "Profundizacion en el ecosistema Spring y sus mejores practicas",
        "Implementacion de patrones de diseno como Repository, Service y DTO",
        "Tecnicas de optimizacion de rendimiento en aplicaciones Java",
      ],
      en: [
        "Deep dive into the Spring ecosystem and its best practices",
        "Implementation of design patterns like Repository, Service, and DTO",
        "Performance optimization techniques in Java applications",
      ],
    },
    features: {
      es: [
        "Operaciones CRUD completas con validacion de datos",
        "Autenticacion y autorizacion con JWT",
        "Documentacion interactiva con Swagger/OpenAPI",
        "Manejo global de excepciones con respuestas HTTP apropiadas",
        "Pruebas unitarias e integracion con JUnit y Mockito",
      ],
      en: [
        "Complete CRUD operations with data validation",
        "Authentication and authorization with JWT",
        "Interactive documentation with Swagger/OpenAPI",
        "Global exception handling with appropriate HTTP responses",
        "Unit and integration tests with JUnit and Mockito",
      ],
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA", "JWT", "Swagger"],
    github: "https://github.com/JefersonMesaUFPSO",
    image: "/images/project-crud.jpg",
    code: `@RestController
@RequestMapping("/api/v1/resources")
@RequiredArgsConstructor
public class ResourceController {

    private final ResourceService resourceService;

    @GetMapping
    public ResponseEntity<Page<ResourceDTO>> findAll(
            @PageableDefault(size = 20) Pageable pageable) {
        return ResponseEntity.ok(resourceService.findAll(pageable));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResourceDTO create(
            @Valid @RequestBody CreateResourceRequest request) {
        return resourceService.create(request);
    }
}`,
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    shortDesc: {
      es: "Plataforma de visualizacion interactiva para analitica del sector salud",
      en: "Interactive visualization platform for healthcare analytics",
    },
    fullDesc: {
      es: "Plataforma de visualizacion de datos diseñada para el analisis de indicadores de salud. Integra multiples fuentes de datos y genera dashboards interactivos para la toma de decisiones estrategicas en el sector salud.",
      en: "Data visualization platform designed for health indicator analysis. Integrates multiple data sources and generates interactive dashboards for strategic decision-making in the healthcare sector.",
    },
    challenges: {
      es: [
        "Integracion de multiples fuentes de datos heterogeneas",
        "Rendimiento en la visualizacion de grandes volumenes de datos",
        "Diseno de KPIs relevantes para el sector salud",
      ],
      en: [
        "Integration of multiple heterogeneous data sources",
        "Performance in visualizing large data volumes",
        "Design of relevant KPIs for the healthcare sector",
      ],
    },
    learnings: {
      es: [
        "Procesamiento y transformacion de datos con Pandas",
        "Creacion de visualizaciones interactivas con Plotly",
        "Modelado predictivo con Scikit-learn",
      ],
      en: [
        "Data processing and transformation with Pandas",
        "Creation of interactive visualizations with Plotly",
        "Predictive modeling with Scikit-learn",
      ],
    },
    features: {
      es: [
        "Dashboards interactivos con filtros dinamicos",
        "Modelos predictivos para tendencias medicas",
        "Exportacion de reportes en multiples formatos",
        "Monitoreo de KPIs en tiempo real",
        "Componentes modulares y reutilizables",
      ],
      en: [
        "Interactive dashboards with dynamic filters",
        "Predictive models for medical trends",
        "Report export in multiple formats",
        "Real-time KPI monitoring",
        "Modular and reusable components",
      ],
    },
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "Scikit-learn", "MongoDB"],
    github: "https://github.com/JefersonMesaUFPSO",
    image: "/images/project-healthcare.jpg",
    code: `import streamlit as st
import plotly.express as px
from services.data_service import DataService

class DashboardBuilder:
    def __init__(self, data_service: DataService):
        self._data = data_service

    def render_kpi_cards(self) -> None:
        cols = st.columns(4)
        metrics = self._data.get_kpi_metrics()
        for col, metric in zip(cols, metrics):
            col.metric(
                label=metric.name,
                value=metric.value,
                delta=metric.delta
            )`,
  },
  {
    id: "nifi-integration",
    title: "Sistema de Integracion NiFi",
    shortDesc: {
      es: "Plataforma de integracion de sistemas para el sector salud con Apache NiFi",
      en: "Systems integration platform for the healthcare sector with Apache NiFi",
    },
    fullDesc: {
      es: "Sistema de integracion de datos que conecta multiples fuentes del sector salud usando Apache NiFi. Automatiza el flujo de datos entre sistemas heterogeneos, garantizando la calidad y consistencia de la informacion.",
      en: "Data integration system connecting multiple healthcare sources using Apache NiFi. Automates data flow between heterogeneous systems, ensuring information quality and consistency.",
    },
    challenges: {
      es: [
        "Orquestacion de flujos de datos complejos",
        "Manejo de errores y reintentos automaticos",
        "Transformacion de datos en tiempo real",
      ],
      en: [
        "Orchestration of complex data flows",
        "Error handling and automatic retries",
        "Real-time data transformation",
      ],
    },
    learnings: {
      es: [
        "Arquitectura de integracion de sistemas",
        "Apache NiFi y flujos de datos ETL",
        "Monitoreo y observabilidad de pipelines",
      ],
      en: [
        "Systems integration architecture",
        "Apache NiFi and ETL data flows",
        "Pipeline monitoring and observability",
      ],
    },
    features: {
      es: [
        "Flujos de datos automatizados con Apache NiFi",
        "Transformacion y validacion de datos en tiempo real",
        "Monitoreo de pipelines con alertas",
        "Conexion con 15+ sistemas heterogeneos",
        "Logs y trazabilidad completa",
      ],
      en: [
        "Automated data flows with Apache NiFi",
        "Real-time data transformation and validation",
        "Pipeline monitoring with alerts",
        "Connection with 15+ heterogeneous systems",
        "Complete logging and traceability",
      ],
    },
    technologies: ["Apache NiFi", "Docker", "PostgreSQL", "MongoDB", "Python"],
    github: "https://github.com/JefersonMesaUFPSO",
    image: "/images/project-nifi.jpg",
    code: `# NiFi flow configuration with Python processor
class HealthDataProcessor:
    """Processes and validates healthcare data records."""

    def transform(self, flow_file: FlowFile) -> FlowFile:
        record = json.loads(flow_file.getContentsAsBytes())
        validated = self._validate_schema(record)
        enriched = self._enrich_with_metadata(validated)
        return flow_file.write(json.dumps(enriched))

    def _validate_schema(self, record: dict) -> dict:
        schema = HealthRecordSchema()
        return schema.load(record)`,
  },
  {
    id: "reactive-microservices",
    title: "Microservicios Reactivos",
    shortDesc: {
      es: "Arquitectura de microservicios reactivos con Spring WebFlux y Kafka",
      en: "Reactive microservices architecture with Spring WebFlux and Kafka",
    },
    fullDesc: {
      es: "Arquitectura de microservicios construida con Spring WebFlux para procesamiento reactivo y no bloqueante. Utiliza Kafka para comunicacion asincrona entre servicios, garantizando alta disponibilidad y escalabilidad.",
      en: "Microservices architecture built with Spring WebFlux for reactive, non-blocking processing. Uses Kafka for asynchronous inter-service communication, ensuring high availability and scalability.",
    },
    challenges: {
      es: [
        "Implementacion de programacion reactiva end-to-end",
        "Gestion de eventos con Kafka y manejo de backpressure",
        "Testing de flujos reactivos asincrono",
      ],
      en: [
        "End-to-end reactive programming implementation",
        "Event management with Kafka and backpressure handling",
        "Async reactive flow testing",
      ],
    },
    learnings: {
      es: [
        "Programacion reactiva con Project Reactor",
        "Patrones de comunicacion asincrona con Kafka",
        "Clean Architecture en microservicios",
      ],
      en: [
        "Reactive programming with Project Reactor",
        "Async communication patterns with Kafka",
        "Clean Architecture in microservices",
      ],
    },
    features: {
      es: [
        "APIs no bloqueantes con Spring WebFlux",
        "Mensajeria asincrona con Apache Kafka",
        "Circuit Breaker con Resilience4j",
        "Documentacion con OpenAPI 3.0",
        "Contenedorizacion con Docker Compose",
      ],
      en: [
        "Non-blocking APIs with Spring WebFlux",
        "Async messaging with Apache Kafka",
        "Circuit Breaker with Resilience4j",
        "Documentation with OpenAPI 3.0",
        "Containerization with Docker Compose",
      ],
    },
    technologies: ["Java", "Spring WebFlux", "Kafka", "Docker", "PostgreSQL", "Resilience4j"],
    github: "https://github.com/JefersonMesaUFPSO",
    image: "/images/project-microservices.jpg",
    code: `@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository repository;
    private final KafkaProducer<String, OrderEvent> producer;

    public Mono<Order> createOrder(OrderRequest req) {
        return repository.save(Order.from(req))
            .flatMap(order -> sendEvent(order)
                .thenReturn(order));
    }

    private Mono<Void> sendEvent(Order order) {
        return Mono.fromFuture(
            producer.send(new ProducerRecord<>(
                "orders", order.getId(),
                new OrderCreatedEvent(order)
            ))
        ).then();
    }
}`,
  },
]

/* --------------------------------------------------------
   Helper: calculate dynamic experience duration
   -------------------------------------------------------- */
export function calculateExperience(startDate: string, locale: "es" | "en"): string {
  const start = new Date(startDate + "-01")
  const now = new Date()
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (months < 0) months = 0
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (locale === "es") {
    if (years === 0) return `${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`
    if (remainingMonths === 0) return `${years} ${years === 1 ? "ano" : "anos"}`
    return `${years} ${years === 1 ? "ano" : "anos"} y ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`
  }

  if (years === 0) return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
  if (remainingMonths === 0) return `${years} ${years === 1 ? "year" : "years"}`
  return `${years} ${years === 1 ? "year" : "years"} and ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
}

export function formatDate(date: string, locale: "es" | "en"): string {
  const [y, m] = date.split("-")
  const monthNames: Record<string, string[]> = {
    es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  }
  return `${monthNames[locale][parseInt(m) - 1]} ${y}`
}
