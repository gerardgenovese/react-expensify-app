import React from "react";
import { shallow } from "enzyme";
// import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

test("should render Header correctly", () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();

	// expect(toJSON(wrapper)).toMatchSnapshot();

	//enzyme example
	// expect(wrapper.find("h1").text()).toBe("Expensify App");



	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// console.log(renderer.getRenderOutput());
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
})

