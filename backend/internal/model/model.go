package model

import "gorm.io/gorm"

type Descarte struct{
	gorm.Model
	Nome string
	Contato Contato
	Descricao string
	Horario string
}

type Contato struct{
	gorm.Model
	Endereco string
	Telefone string
	DescarteId uint
}
