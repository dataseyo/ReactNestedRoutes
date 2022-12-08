# React Nested Routes

A basic skeleton for nesting routes in React and passing data to them, using redux toolkit to store the data.

## Steps

- install react-router-doom
- the parent route's path should have the following format: <Route path="/route/\*"/ element={<Element/>}/>>
- in the Element file, define another set of Routes, with an index route and static or dynamic sub routes
- import Outlet from react-router-dom in Element, and use it as <Outlet/>
- ...
