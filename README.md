
# For Hands-On Lab

This repository is an example of the capabilities of using custom components in oracle digital assistant. The original author of this repository is [@rsantrod](https://github.com/rsantrod), you can follow the [Katakoda Scenarios](https://www.katacoda.com/rsantrod/courses/oda-course) in order to understand how this skill is built.

## As a prerequisite for follow this scenario:
- Create a free account Oracle Cloud (follow the scenarios at http://bit.ly/real-oci or go to cloud.oracle.com/tryit)
- Set up and a free instance of Oracle Digital Assistant (https://www.katacoda.com/rsantrod/courses/oda-course)
- Create a free account on OpenWeatherMap API and get a API Key. (https://openweathermap.org/api)
- Create a free account on ngrok and install the executable. (https://ngrok.com)

## Set-up Custom Component example

Clone this repo:
```shell
git clone https://github.com/agonzalezsp/oda_customcomponents_demo.git
```

### From  the root folder:

Install dependecies:
```shell
npm install
```
Replace on /components/query.js file your API key from OpenWeatherMap API:
[https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)


Start service:
```shell
bots-node-sdk service -P 3000
```
Tunnel  service:
```shell
ngrok http 3000
```
Copy the Forwarding HTTPS URL from the ngrok output:
```shell
Forwarding     https://this_url.ngrok.io -> http://localhost:3000
```
Create new external service at ODA. Fill the dialog with the values below:
- Name: WeatherService
- Metadata URL: https://this_url.ngrok.io/components
- User Name: test (or any value, since it is executed from local, does not have security implementation.)
- Password: test (or any value, since it is executed from local, does not have security implementation.)


## Set Up ODA SKILL

Follow the instructions on [Katakoda Scenarios](https://www.katacoda.com/rsantrod/courses/oda-course)  to create, and configure a new skill at the ODA console, set up intents and define the flow.

If you want to skip thease steps import the skill prepare to this example on route:

**skill/test_cc(1.0).zip**



