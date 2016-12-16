import { Injectable } from '@angular/core';
import {
    Mapper,
    Collection,
    LinkedCollection,
    Container,
    DataStore,
    Query
} from 'js-data';
import { HttpAdapter } from 'js-data-http';

@Injectable()
export class Ng2JSData {
  public createMapper(options: any, adapterOptions: any = { 'default': true }) {
    let mapper = new Mapper(options);
    const adapter = new HttpAdapter();
    mapper.registerAdapter('http', adapter, adapterOptions);
    return mapper;
  }
  
  public createCollection(options: any, adapterOptions: any = { 'default': true }) {
    let collection = new Collection(options);
    return collection;
  }
  
  public createLinkedCollection(options: any, adapterOptions: any = { 'default': true }) {
    let linkedCollection = new LinkedCollection(options);
    return linkedCollection;
  }
  
  public createContainer(options: any, adapterOptions: any = { 'default': true }) {
    let container = new Container(options);
    return container;
  }
  
  public createDataStore(options: any, adapterOptions: any = { 'default': true }) {
    let ds = new DataStore(options);
    return ds;
  }
  
  public createQuery(options: any, adapterOptions: any = { 'default': true }) {
    let query = new Query(options);
    return query;
  }
}