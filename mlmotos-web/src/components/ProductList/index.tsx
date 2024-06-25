import { ProductCard } from "@components/ProductCard";
import { Col, Row } from "antd";

export function ProductList({ products, platform }) {
  return (
    <div>
      <Row gutter={[10, 25]}>
        {products.map((product, index) => (
          <Col key={index} className="tw-flex tw-justify-center md:tw-block md:tw-justify-start" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
            <ProductCard key={product.id} product={product} index={index + 1} platform={platform} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
