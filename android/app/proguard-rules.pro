########################################
# React Native core
########################################
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# Hermes / JSC engine
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**
-keep class com.facebook.jni.** { *; }
-dontwarn com.facebook.jni.**

########################################
# Networking (OkHttp, etc.)
########################################
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

########################################
# Google Mobile Ads (AdMob)
########################################
-keep class com.google.android.gms.ads.** { *; }
-dontwarn com.google.android.gms.**

########################################
# Agora SDK
########################################
-keep class io.agora.** { *; }
-dontwarn io.agora.**

########################################
# Keep models / DTOs if needed later
########################################
# -keepclassmembers class com.synce.** { *; }