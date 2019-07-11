# Utility Simulator

## About

Utility Simulator is a web application that asks users to manage the (fictional)
NYC electric utility company.

The simulation aims to be as realistic as possible. Most data is drawn from the
[US Energy Information Agency](https://eia.gov).

## Road map

Current state: **Pre-alpha**

The core mechanics have been implemented but a lot of functionality is needed
before an alpha version can be released.

### Alpha

- Power plant construction
  - [ ] Small, medium, and large plant sizes
- [ ] Decommission power plant
- [ ] Cancel construction in progress
- [ ] Realistic initial set of power plants
- [ ] Plant depreciation
- Plant upgrades
  - [ ] Carbon capture
- More power plant types
  - [x] Coal
  - [x] Solar
  - [ ] Natural gas
  - [ ] Nuclear
- Storage facilities
  - [ ] Pumped hydro
- Scenario parameters
  - [ ] Increasing demand over time
  - [ ] Increasing rate of generator efficiency by generator type
- UI/UX Improvements
  - [ ] Alert if demand will exceed capacity in next 5 years

### Beta

- UI/UX Improvements
  - [ ] Reservoir storage visualization
  - [ ] City visualization
  - [ ] Solar capacity visualization
- [ ] Customizable scenarios
- [ ] Save and load simulation state
- [ ] Leaderboard
- Create an issue if you have suggestions!

## Contributing

PRs are more than welcome. Be aware that this is pre-alpha software. Major
architectural changes may occur after you fork, so please try to keep your fork
up-to-date with master.

Also, feel free to fork this and take it a completely different direction. The
goal of this project is to educate, and if you can think of a better way to do
so, go for it!

If you want to contribute, but aren't sure where to start, check for issues
tagged with "Good first issue" or email us at utilitysim@greengovernance.org.

### Technologies

The core technologies are:

- React (ui)
- Redux (simulation state management)
- Bootstrap/Reactstrap (ui framework and components)
- Typescript
- Gatsby
