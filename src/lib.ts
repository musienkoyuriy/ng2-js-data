import { Injectable } from '@angular/core';
import {
    Mapper,
    Schema,
    Collection,
    LinkedCollection,
    Container,
    DataStore,
    Query
} from 'js-data';

import { HttpAdapter } from 'js-data-http';

const DEFAULT_ADAPTER_OPTION: any = { 'default': true };

@Injectable()
export class Ng2JSData {
  public createMapper(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const mapper = new Mapper(options);
    const adapter = new HttpAdapter();
    mapper.registerAdapter('http', adapter, adapterOptions);
    return mapper;
  }

  public createSchema(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const schema = new Schema(options);
    return schema;
  }
  
  public createCollection(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const collection = new Collection(options);
    return collection;
  }
  
  public createLinkedCollection(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const linkedCollection = new LinkedCollection(options);
    return linkedCollection;
  }
  
  public createContainer(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const container = new Container(options);
    return container;
  }
  
  public createDataStore(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const ds = new DataStore(options);
    return ds;
  }
  
  public createQuery(options: any, adapterOptions: any = DEFAULT_ADAPTER_OPTION): any {
    const query = new Query(options);
    return query;
  }
}
