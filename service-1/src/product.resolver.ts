import { Resolver, Query, ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;
}

@Resolver()
export class ProductResolver {
  @Query(() => Product)
  async product(): Promise<Product> {
    return {
      id: 'abc',
      name: 'my-product',
      price: 100,
    };
  }
}
