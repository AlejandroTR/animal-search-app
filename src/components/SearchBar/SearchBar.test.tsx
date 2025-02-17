import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "../../store/search/searchSlice.ts";

import SearchBar from "./SearchBar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

describe("SearchBar", () => {
  test("should renders SearchBar correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchBar />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole("searchbar")).toBeInTheDocument();
  });

  test("should can type into the search input", () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchBar />
        </Router>
      </Provider>,
    );

    const input = screen.getByRole("searchbar").querySelector("input");
    fireEvent.change(input!, { target: { value: "test" } });

    expect(input!.value).toBe("test");
  });

  test("should calls handleSearch and navigates when submit is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const mockSetQuery = jest.fn();
    store.dispatch = mockSetQuery;

    render(
      <Provider store={store}>
        <Router>
          <SearchBar />
        </Router>
      </Provider>,
    );

    const input = screen.getByRole("searchbar").querySelector("input");
    fireEvent.change(input!, { target: { value: "test" } });

    fireEvent.submit(screen.getByRole("searchbar"));

    expect(mockSetQuery).toHaveBeenCalledWith({
      type: "search/setQuery",
      payload: "test",
    });
    expect(mockNavigate).toHaveBeenCalledWith("/resultsSearch");
  });

  test("should dispatches clearQuery and sets input to empty when CloseIcon is clicked", () => {
    const mockClearQuery = jest.fn();
    store.dispatch = mockClearQuery;

    render(
      <Provider store={store}>
        <Router>
          <SearchBar />
        </Router>
      </Provider>,
    );

    const input = screen.getByRole("searchbar").querySelector("input");
    fireEvent.change(input!, { target: { value: "test" } });

    const closeIcon = screen.getByTestId("close-icon");
    fireEvent.click(closeIcon);

    expect(input!.value).toBe("");
    expect(mockClearQuery).toHaveBeenCalledWith({
      type: "search/clearQuery",
      payload: undefined,
    });
  });

  test("should renders the submit button when variant is 'home'", () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchBar variant="home" />
        </Router>
      </Provider>,
    );

    const input = screen.getByRole("searchbar").querySelector("input");
    fireEvent.change(input!, { target: { value: "test" } });

    const submitButton = screen.getByRole("button", { name: /buscar/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("should does not render the submit button when variant is not 'home'", () => {
    render(
      <Provider store={store}>
        <Router>
          <SearchBar variant="header" />
        </Router>
      </Provider>,
    );

    const submitButton = screen.queryByRole("button", { name: /buscar/i });
    expect(submitButton).toBeNull();
  });
});
