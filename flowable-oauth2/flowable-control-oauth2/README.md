# How-To: Integrate OAuth 2.0 / OpenID Connect with Flowable Control

This sample repository is based on the [How-To: Integrate OAuth 2.0 / OpenID Connect with Flowable Control](https://documentation.flowable.com/latest/howto/howto-oauth2-flowable-control/).
For further explanation please refer to the How-To.

> ***Note***
> 
> This kind of integration might be added out-of-the-box to the Flowable products in the future. This how-to will be changed or removed if and when that happens.
> 
> Additionally, this How-To is an example that is meant as an inspiration when met with similar requirements. Custom code isn't covered by standard Flowable Support.

## Requirements

* Access to the Flowable Enterprise Artifactory

## Setup

* Configure Maven to connect to the Flowable Enterprise Artifactory
* Replace placeholders in the [application.properties](src/main/resources/application.properties) file.
* Import it to an IDE and start it there, or run `./mvnw clean package spring-boot:run`
