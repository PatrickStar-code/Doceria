import { Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
import { ProductProps } from "../../../../Context/ContextProvider";
export function Highlight_products_card({product }: {product: ProductProps} ) {
    return (
        <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc={product.img}
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
 
            <Card.Title>R$ {product.preco}</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>{product.nome}</Card.Title>
   
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    );
}