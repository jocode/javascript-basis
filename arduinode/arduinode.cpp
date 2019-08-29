#include <Servo.h>

Servo servo;
int led = 13;
int luz = 0;

void setup()
{
  pinMode(led, OUTPUT); // Define el pin 13 como salida
  pinMode(A0, INPUT); // Defino la entrada análoga
  Serial.begin(9600); // Abro el puerto serial en 9600 bps:
  servo.attach(9); // Le indico el pin 9 donde está conectado
  servo.write(0); // Inicio el servomotor en 90°
}

void loop()
{
  digitalWrite(led, HIGH);
  luz = analogRead(A0); // Leo el valor de la foto resistencia
  Serial.println(luz); // Imprimo el valor de   digitalWrite(led, HIGH);
  
  delay(500); // Espero 500ms
  
  if (luz > 300){ // Hay luz
    servo.write(70);
  } else {
    servo.write(0);
  }
  
  digitalWrite(led, LOW);
  delay(500); // Espero 500ms
  
  if (luz > 300){ // Hay luz
    servo.write(110);
  } else {
    servo.write(0);
  }
  
}