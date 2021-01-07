import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat, CatSchema } from './cat.schema';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: Cat.name,
      useFactory: () => {
          const schema = CatSchema
          schema.plugin(require('mongoose-fuzzy-searching'), { fields: ['name'] })
          return schema
      },
  },
  ]),
  MongooseModule.forRootAsync({
    useFactory: async () => ({
        uri: 'mongodb://localhost/nest',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoCreate: true,
    }),
})
],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
