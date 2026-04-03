/* Map tech icon slugs to devicon CDN URLs */

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

export function getTechIconUrl(slug: string): string {
  const map: Record<string, string> = {
    java: `${DEVICON}/java/java-original.svg`,
    python: `${DEVICON}/python/python-original.svg`,
    javascript: `${DEVICON}/javascript/javascript-original.svg`,
    springboot: `${DEVICON}/spring/spring-original.svg`,
    nestjs: `${DEVICON}/nestjs/nestjs-original.svg`,
    nodejs: `${DEVICON}/nodejs/nodejs-original.svg`,
    nextjs: `${DEVICON}/nextjs/nextjs-original.svg`,
    react: `${DEVICON}/react/react-original.svg`,
    mongodb: `${DEVICON}/mongodb/mongodb-original.svg`,
    postgresql: `${DEVICON}/postgresql/postgresql-original.svg`,
    mysql: `${DEVICON}/mysql/mysql-original.svg`,
    oracle: `${DEVICON}/oracle/oracle-original.svg`,
    kafka: `${DEVICON}/apachekafka/apachekafka-original.svg`,
    apache: `${DEVICON}/apache/apache-original.svg`,
    apacheairflow: `${DEVICON}/apacheairflow/apacheairflow-original.svg`,
    docker: `${DEVICON}/docker/docker-original.svg`,
    streamlit: `${DEVICON}/streamlit/streamlit-original.svg`,
    plotly: `${DEVICON}/plotly/plotly-original.svg`,
    scikitlearn: `${DEVICON}/scikitlearn/scikitlearn-original.svg`,
    powerbi: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    amazons3: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    googlecloud: `${DEVICON}/googlecloud/googlecloud-original.svg`,
    microsoftazure: `${DEVICON}/azure/azure-original.svg`,
  }
  return map[slug] || `${DEVICON}/devicon/devicon-original.svg`
}
