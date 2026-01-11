package com.synce;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    // Yeh React Native side ka root component name hai (AppRegistry.registerComponent)
    return "Synce";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you enabled the New Architecture (fabric/turbo), NEW_ARCH_ENABLED = true hoga
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}