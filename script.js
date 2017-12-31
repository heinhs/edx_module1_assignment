const fs = require('fs')
const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const jsonFilePath='customer-data.json'
let conv = []
const convert = () => {
	csv()
	.fromFile(csvFilePath)
	.on('json',(jsonObj)=>{
		conv.push(jsonObj)
	})
	.on('done',(error)=>{
	    fs.writeFileSync((jsonFilePath), JSON.stringify(conv, null, 2)) 
	     console.log('Conversion Success')
	})
}
convert()
