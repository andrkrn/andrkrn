Kurkur.AplicationStore = DS.Store.extend({
  revision: 1,
  adapter: DS.RESTAdapter.create()
});

Kurkur.Serializer = DS.RESTSerializer.create();

Kurkur.Adapter = DS.RESTAdapter.extend({
  serializer: Kurkur.Serializer
});

DS.RESTAdapter.reopen({
  namespace: "api"
});