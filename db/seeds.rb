# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  full_name: 'Andri Kurnia',
  email: 'me@andrikurnia.com',
  password_digest: "$2a$10$wJTPdvpGgzDvkXChrcPyqOQrFFawzGu89B1rZze/lVIcJKWiNeAqS"
)
Article.create([
  {
    title: 'Article One',
    user_id: 1,
    article_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisi, vehicula a imperdiet eu, pretium et magna. Curabitur sodales erat nibh, eu imperdiet dolor lacinia nec. Maecenas ac lacus laoreet, dapibus dui non, vestibulum enim. Curabitur ac egestas lorem. Vestibulum ut nisi sed enim vehicula venenatis. Vivamus scelerisque bibendum odio, et porttitor diam. Curabitur dui tortor, gravida vitae pretium et, adipiscing ac est. Nullam sit amet malesuada nisi. Nulla molestie rhoncus ante, in cursus dui posuere sit amet. Nullam commodo nec lorem non volutpat. Vivamus bibendum interdum libero ut fringilla.',
    description: 'Article Lorem 1',
  },
  {
    title: 'Article Two',
    user_id: 1,
    article_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisi, vehicula a imperdiet eu, pretium et magna. Curabitur sodales erat nibh, eu imperdiet dolor lacinia nec. Maecenas ac lacus laoreet, dapibus dui non, vestibulum enim. Curabitur ac egestas lorem. Vestibulum ut nisi sed enim vehicula venenatis. Vivamus scelerisque bibendum odio, et porttitor diam. Curabitur dui tortor, gravida vitae pretium et, adipiscing ac est. Nullam sit amet malesuada nisi. Nulla molestie rhoncus ante, in cursus dui posuere sit amet. Nullam commodo nec lorem non volutpat. Vivamus bibendum interdum libero ut fringilla.',
    description: 'Article Lorem 2',
  },
  {
    title: 'Article Three',
    user_id: 1,
    article_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisi, vehicula a imperdiet eu, pretium et magna. Curabitur sodales erat nibh, eu imperdiet dolor lacinia nec. Maecenas ac lacus laoreet, dapibus dui non, vestibulum enim. Curabitur ac egestas lorem. Vestibulum ut nisi sed enim vehicula venenatis. Vivamus scelerisque bibendum odio, et porttitor diam. Curabitur dui tortor, gravida vitae pretium et, adipiscing ac est. Nullam sit amet malesuada nisi. Nulla molestie rhoncus ante, in cursus dui posuere sit amet. Nullam commodo nec lorem non volutpat. Vivamus bibendum interdum libero ut fringilla.',
    description: 'Article Lorem 3',
  },
  {
    title: 'Article Four',
    user_id: 1,
    article_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisi, vehicula a imperdiet eu, pretium et magna. Curabitur sodales erat nibh, eu imperdiet dolor lacinia nec. Maecenas ac lacus laoreet, dapibus dui non, vestibulum enim. Curabitur ac egestas lorem. Vestibulum ut nisi sed enim vehicula venenatis. Vivamus scelerisque bibendum odio, et porttitor diam. Curabitur dui tortor, gravida vitae pretium et, adipiscing ac est. Nullam sit amet malesuada nisi. Nulla molestie rhoncus ante, in cursus dui posuere sit amet. Nullam commodo nec lorem non volutpat. Vivamus bibendum interdum libero ut fringilla.',
    description: 'Article Lorem 4',
  },
  {
    title: 'Article Five',
    user_id: 1,
    article_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl nisi, vehicula a imperdiet eu, pretium et magna. Curabitur sodales erat nibh, eu imperdiet dolor lacinia nec. Maecenas ac lacus laoreet, dapibus dui non, vestibulum enim. Curabitur ac egestas lorem. Vestibulum ut nisi sed enim vehicula venenatis. Vivamus scelerisque bibendum odio, et porttitor diam. Curabitur dui tortor, gravida vitae pretium et, adipiscing ac est. Nullam sit amet malesuada nisi. Nulla molestie rhoncus ante, in cursus dui posuere sit amet. Nullam commodo nec lorem non volutpat. Vivamus bibendum interdum libero ut fringilla.',
    description: 'Article Lorem 5',
  }
])