// We need to implement two functions, one function will return the data from JSON
// Another function will return the data from the CSV.

import fs from'fs'
import{parse} from'csv-parse/sync'


export class DataProvider
{
    // create a static method and pass filepath as parameter
    static getTestDatafromJson(filepath:string)
    {
        
        let data:any=JSON.parse(fs.readFileSync(filepath,'utf-8'))
        return data
    }


    static getTestDatafromCSV(filepath:string)
    {
        // parse is method
        // we have to return the data
        let data:any=parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true})
        return data
    }
}