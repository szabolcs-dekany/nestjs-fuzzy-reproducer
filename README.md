# nestjs-fuzzy-reproducer

This is an issue reproducer for using the https://www.npmjs.com/package/mongoose-fuzzy-searching package with NestJS.


### Requirements 
- MongoDB running locally. You can spin one with ```docker run --name nestjs-fuzzy-reproducer -p 27017:27017 -d mongo:latest```
- Yarn
- Node

### Steps to reproduce

1. Spin up the local MongoDB
2. Run ```yarn install```
3. Run the E2E test with ```yarn test:e2e ```
4. Check that the fuzzy fields were generated on the created document, meaning that the plugin applied to the schema
5. This should mean that the injected model in ``` app.service.ts ``` should have a method like this ``` this.catModel.fuzzySearch('this') ```, however it is unavalible to the model.
