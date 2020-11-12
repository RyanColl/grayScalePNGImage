/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: 
 * Author:
 * 
 */

const { unzip } = require("unzipper");
const { readDir, grayScale } = require("./IOhandler");
const path = require('path');
const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
	pathProcessed = `${__dirname}/grayscaled`;



IOhandler.unzip(zipFilePath, pathUnzipped)
	.then(() => readDir(pathUnzipped)
	  .then(fileName => {
		  for(let i = 0; i < fileName.length; i++) {
			  if (path.extname(fileName[i]) !== ".png") {
				  console.log("Error, wrong file type")
			  } else {
				grayScale(pathUnzipped+"/"+fileName[i], pathProcessed)
			  }
			
		  }
		
	  })
	  .catch(err => console.log(err))
	  )
    .catch(err => console.log(err))

