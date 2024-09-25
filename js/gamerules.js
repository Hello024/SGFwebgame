import{map} from "./server.js"
export function mkunit(y,x){
    if (map.thing[y][x] == 0){
      return true
    }
    else{
      return false
    }

}
