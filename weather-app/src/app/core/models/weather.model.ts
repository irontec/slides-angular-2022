export interface WeatherInfo {
  version: string
  user: string
  dateGenerated: string
  status: string
  data: WeatherData[]
}


export interface WeatherData {
  parameter: string
  coordinates: any[]
}

