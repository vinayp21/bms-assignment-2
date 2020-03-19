import React from "react";
import renderer from "react-test-renderer";
import Test from "./Test";

test("Link changes the class when hovered", () => {
    const component = renderer.create(
        <div>
            <Test />
        </div>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
