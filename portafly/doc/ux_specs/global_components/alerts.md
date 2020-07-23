# Alerts UX/UI specs

[Back to index](../index.md)

* [PatternFly Alerts design guidelines](https://www.patternfly.org/v4/design-guidelines/usage-and-behavior/alerts-and-notifications)
* [PatternFly-react Alerts docs](https://www.patternfly.org/v4/documentation/react/components/alert)

### Network error alerts
* Network errors are displayed in **toast alerts** ([PF specs](https://www.patternfly.org/v4/documentation/react/components/alert#types)), unless the current state of the UI is blocking users' view of the page layout (eg. modal dialogs)
  * In this case, the errors will be displayed as **inline alerts** ([PF specs](https://www.patternfly.org/v4/documentation/react/components/alert#inline-types)), making sure the positioning is as close as possible to the trigger (eg. button) of the action that launched the network request.
* Network error alerts are persistent and always display a dismiss button (`fa-times` icon)
* Network error alerts variant is `warning`
* Network error types:
  * Generic network error
  * Secure connection failed
  * Timed out
  * Cannot find host
  * Not connected to Internet
  * Cannot connect to host
  * Not found
  * Authentication error
    * Wrong token
    * Session expired
  * Server internal error

### Success alerts (bulk actions, delete object...)
* Success messages are displayed in **toast alerts** ([PF specs](https://www.patternfly.org/v4/documentation/react/components/alert#types))
* Success messages are not persistent, will be dismissed after 8 seconds and always display a dismiss button (`fa-times` icon)
* Success alerts variant is `success`