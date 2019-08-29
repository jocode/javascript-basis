int amarillo = 13;
int rojo = 7;
int milisegundos = 500;

// Se ejecuta cuando el arduino arranca
void setup(){
  pinMode(amarillo, OUTPUT);
  pinMode(amarillo, OUTPUT);
}

// Se ejecuta todo el tiempo
void loop(){
  // Emito la salida al pin 13 (Amarillo)
  digitalWrite(amarillo, HIGH);
  digitalWrite(rojo, LOW);
  delay(milisegundos); // Espero medio segundo
  digitalWrite(amarillo, LOW); 
  digitalWrite(rojo, HIGH); // Apago el led
  delay(milisegundos); // Espero medio segundo
}
