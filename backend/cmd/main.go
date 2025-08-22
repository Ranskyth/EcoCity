package main

import (
	"github.com/labstack/echo/v4"
)

func main(){
	
	app := echo.New();

	app.GET("/", func (c echo.Context) error {
		return c.JSON(200, map[string]string{"mensagem":"Hello"})
	})

	app.Logger.Fatal(app.Start(":3333"))
}