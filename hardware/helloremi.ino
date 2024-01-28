#include <Servo.h>
Servo myservo;
int LED1 = 13;
int LED2 = 12;
int PUSH5 = 3;
int PUSH4 = 4;
int PUSH3 = 5;
int PUSH2 = 6;
int PUSH1 = 7;
int pos = 0;

byte lastButtonState = LOW;
byte ledState = LOW;
void setup() {
  Serial.begin(9600);
  pinMode(PUSH1, INPUT);
  pinMode(PUSH2, INPUT);
  pinMode(PUSH3, INPUT);
  pinMode(PUSH4, INPUT);
  pinMode(PUSH5, INPUT);

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);  
  myservo.attach(2);
}

void loop() {
  digitalWrite(LED1, HIGH);
  digitalWrite(LED2, HIGH);
  byte State1 = digitalRead(PUSH1);
  if (State1 != lastButtonState) {
    digitalWrite(LED1, LOW);
    if (State1 == LOW) {
      ledState = (ledState == HIGH) ? LOW: HIGH;
      Serial.println(5);
    }    
    lastButtonState = State1;
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
   
  }
  else{
    digitalWrite(LED1, HIGH);    
  }

  byte State2 = digitalRead(PUSH2);  
  if (State2 != lastButtonState) {
      digitalWrite(LED1, LOW);
    if (State2 == LOW) {
      ledState = (ledState == HIGH) ? LOW: HIGH;
      Serial.println(1);
    }    
    lastButtonState = State2;
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
    }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
    }
  }
  else{
    digitalWrite(LED1, HIGH);
  }
  byte State3 = digitalRead(PUSH3);
  if (State3 != lastButtonState) {
      digitalWrite(LED1, LOW);
    if (State3 == LOW) {
      ledState = (ledState == HIGH) ? LOW: HIGH;
      Serial.println(2);
    }    
    lastButtonState = State3;
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  }
  else{
    digitalWrite(LED1, HIGH);
  }
  byte State4 = digitalRead(PUSH4);
  if (State4 != lastButtonState) {
      digitalWrite(LED1, LOW);
    if (State4 == LOW) {
      ledState = (ledState == HIGH) ? LOW: HIGH;
      Serial.println(3);
    }    
    lastButtonState = State4;
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  }
  else{
    digitalWrite(LED1, HIGH);
  }
  byte State5 = digitalRead(PUSH5);
  if (State5 != lastButtonState) {
      digitalWrite(LED1, LOW);
    if (State5 == LOW) {
      ledState = (ledState == HIGH) ? LOW: HIGH;
      Serial.println(4);
    }    
    lastButtonState = State5;
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(5);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(2);                       // waits 15ms for the servo to reach the position
  }
  }
  else{
    digitalWrite(LED1, HIGH);
  }
}
   