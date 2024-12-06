#define BLYNK_TEMPLATE_ID "TMPL3U7cpL6MD"  // Replace with your Blynk Template ID
#define BLYNK_TEMPLATE_NAME "Pulse BPM"
#define BLYNK_AUTH_TOKEN "Ggl1cp59zomRm0moNL2gQ2BuILQL-Eue"  // Replace with your Blynk Auth Token

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

// Wi-Fi credentials
const char* ssid = "vivot15g";  // Replace with your Wi-Fi SSID
const char* password = "";  // Replace with your Wi-Fi password

// Pulse Sensor Pin
const int pulsePin = 34;  // GPIO34 (analog input on ESP32)
volatile int pulseCount = 0;  // Counts the pulses
unsigned long lastPulseTime = 0;  // Tracks the last pulse time
const int debounceInterval = 100;  // Minimum interval between pulses (ms)
unsigned long lastTime = 0;
const int interval = 10000;  // Update interval in milliseconds (10 seconds)

// Interrupt to count pulses with debouncing
void IRAM_ATTR countPulse() {
  unsigned long currentTime = millis();
  if (currentTime - lastPulseTime > debounceInterval) {
    pulseCount++;
    lastPulseTime = currentTime;
  }
}

void setup() {
  // Start Serial Monitor
  Serial.begin(115200);

  // Pulse Sensor Pin Setup
  pinMode(pulsePin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(pulsePin), countPulse, RISING);

  // Connect to Wi-Fi
  Serial.print("Connecting to Wi-Fi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected to Wi-Fi");

  // Connect to Blynk
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, password);
  Serial.println("Connected to Blynk!");
}

void loop() {
  Blynk.run();  // Run Blynk

  unsigned long currentTime = millis();
  if (currentTime - lastTime >= interval) {
    // Calculate BPM (pulses in 10 seconds * 6 to get BPM)
    int bpm = (pulseCount * 12000) / interval;
    pulseCount = 0;  // Reset pulse count
    lastTime = currentTime;

    // Display BPM on Serial Monitor
    Serial.print("Pulse BPM: ");
    Serial.println(bpm);

    // Send BPM to Blynk (Virtual Pin V1)
    Blynk.virtualWrite(V1, bpm);
  }
}
