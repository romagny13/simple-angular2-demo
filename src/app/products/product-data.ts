import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductData implements InMemoryDbService {
    createDb() {
        const products = [
            {
                'id': 1,
                'name': 'Product 1'
            },
            {
                'id': 2,
                'name': 'Product 2'
            }
            ,
            {
                'id': 3,
                'name': 'Product 3'
            }
        ];
        return { products };
    }
}