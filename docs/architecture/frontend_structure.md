# Frontend Architecture (React Native)

## src/

### App entry
- App.js  
  - wraps `NavigationContainer`
  - loads AuthContext
  - logs initial analytics event

### navigation/
- navigationConstants.js      # all route names
- AppStackNavigator.js        # stack above tabs
- MainTabNavigator.js         # bottom tabs: Home, Search, Calls, Profile

### screens/
- Home/
  - FeedScreen.js
  - CreatePostScreen.js
  - ChatListScreen.js
  - ChatScreen.js
- Search/
  - SearchScreen.js
  - SearchResultScreen.js
- RandomVideoCall/
  - RandomCallScreen.js
  - CallHistoryScreen.js
- Profile/
  - ProfileScreen.js
  - EditProfileScreen.js
- AdvancedAccess/
  - AdvancedAccessScreen.js
  - AccessDataScreen.js
  - AccessSettingsScreen.js

### services/
- api/
  - client.js                 # axios + token
  - userApi.js
  - authApi (via authservice)
  - chatApi.js
  - callApi.js
  - subscriptionApi.js
- auth/
  - authservice.js
  - locationService.js
- analytics/
  - usageTracker.js
  - advancedAccessData.js
- storage/
  - preferencesStorage.js
  - secureStorage.js
- videoCall/
  - videoCallService.js       # token fetch
  - callMatchService.js       # random match wrapper

### context/
- AuthContext.js              # user + token state

### models/
- UserModel.js
- CallModel.js

### theme/
- colors.js, spacing.js, fonts.js, typography.js, theme.js

### utils/
- constants.js
- formatters.js
- helpers.js
- logger.js
- validators.js