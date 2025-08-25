package routes

import (
	"github.com/Ranskyth/EcoCity/internal/database"
	"github.com/Ranskyth/EcoCity/internal/model"
	"github.com/labstack/echo/v4"
)

func Routes(app *echo.Echo){

	app.GET("/", func(c echo.Context) error {
		return c.JSON(200, map[string]string{"mensagem":"hello"})
	})

	app.GET("/descartes", func(c echo.Context) error {
    	var descartes []model.Descarte

    	if result := database.DB.Preload("Contato").Find(&descartes); result.Error != nil {
        return c.JSON(500, map[string]string{"error": result.Error.Error()})
    	}

    	return c.JSON(200, descartes)
	})
}