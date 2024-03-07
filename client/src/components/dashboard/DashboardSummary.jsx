import React from "react";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Total Items in your catalog */}
      <Card className="mb-0">
        <Card.Body>
          <h6 className="h6">Total Items in your catalog</h6>
          <CountUp
            start={0}
            end={100}
            duration={2.75}
            separator=","
            decimals={0}
          >
            {({ countUpRef }) => <h3 className="h3" ref={countUpRef} />}
          </CountUp>
        </Card.Body>
      </Card>

      {/* Total items placed on bid */}
      <Card className="mb-0">
        <Card.Body>
          <h6 className="h6">Total items placed on bid </h6>
          <CountUp
            start={0}
            end={75}
            duration={2.75}
            separator=","
            decimals={0}
          >
            {({ countUpRef }) => <h3 className="h3" ref={countUpRef} />}
          </CountUp>
        </Card.Body>
      </Card>

      {/* Total sales */}
      <Card className="mb-0">
        <Card.Body>
          <h6 className="h6">Total sales</h6>
          <CountUp
            start={0}
            end={436683}
            duration={2.75}
            separator=","
            decimals={0}
          >
            {({ countUpRef }) => (
              <h3 className="h3">
                GMD <span ref={countUpRef} />
              </h3>
            )}
          </CountUp>
        </Card.Body>
      </Card>

      {/*  */}
      <Card className="mb-0">
        <Card.Body>
          <h6 className="h6">Total bids made</h6>
          <CountUp start={0} end={5} duration={2.75} separator="," decimals={0}>
            {({ countUpRef }) => <h3 className="h3" ref={countUpRef} />}
          </CountUp>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardSummary;
