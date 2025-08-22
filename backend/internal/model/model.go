package model

type Endereco struct{
	Rua string
	Numero string
	Cep string
	Referencia string
}

type Descarte struct{
	Nome string
	Endereco Endereco
}