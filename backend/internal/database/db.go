package database

import (
	"github.com/Ranskyth/EcoCity/internal/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB;

func Connect(){
	conectionString := "root:root@tcp(127.0.0.1:3306)/echocity_db?charset=utf8mb4&parseTime=true&loc=Local"
	db, err := gorm.Open(mysql.Open(conectionString), &gorm.Config{})

	if err != nil{
		panic("Error na conecão com o DB "+ err.Error())
	}

	db.AutoMigrate(&model.Descarte{}, &model.Contato{})

	DB = db
}