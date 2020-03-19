import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";

test("Link changes the class when hovered", () => {
    const component = renderer.create(
        <div>
            <Header />
        </div>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
