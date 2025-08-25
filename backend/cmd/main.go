package main

import (
	"github.com/Ranskyth/EcoCity/internal/database"
	"github.com/Ranskyth/EcoCity/internal/routes"
	"github.com/labstack/echo/v4"
)

func main(){

	database.Connect()
	
	app := echo.New();

	routes.Routes(app)

	app.Logger.Fatal(app.Start(":8080"))
}