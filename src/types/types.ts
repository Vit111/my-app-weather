import { CoordType } from "./coord"
import { WeatherType } from "./weather"
import { MainType } from "./main"
import { WindType } from "./wind"
import { SysType } from "./sys"




export type CharacterType = {
    coord: CoordType,
    weather: WeatherType,
    base: string,
    main: MainType,
    visibility: number,
    wind: WindType,
    dt: number,
    sys: SysType,
    timezone: number,
    id: number,
    name: string,
    cod: number,
    description: string,
    country: string
}