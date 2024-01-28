import serial
import time 
arduino = serial.Serial(port='COM3', baudrate=9600)

time.sleep(0.05) 

while True:
    while True:
        data = int(arduino.readline())
        if data == 2:
            print("Button pressed")
            break
        


