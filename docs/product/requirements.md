# Functional & Technical Requirements

### Functional

- Users can sign up, log in, and manage a simple profile.  
- Users can start random video calls and see recent call history.  
- Users can send and receive chat messages linked to calls or direct chats.  
- Users can subscribe to premium for an ad‑free, higher priority experience.  

### Non‑functional

- Backend must respond within 1–2 seconds for standard API calls under normal load.  
- All external communication must use HTTPS; JWT tokens stored securely on device.  
- App should handle network loss gracefully with retries and clear error messages.  

### Technical Stack

- Frontend: React Native, React Navigation, AsyncStorage + EncryptedStorage, AdMob SDK, Agora SDK.  
- Backend: Node.js, Express, JWT authentication, PostgreSQL on Neon, hosted on Render.  