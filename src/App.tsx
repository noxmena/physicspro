/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import MockExam from "./pages/MockExam";
import Reference from "./pages/Reference";
import Quizzes from "./pages/Quizzes";
import Syllabus from "./pages/Syllabus";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="reference" element={<Reference />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="exam" element={<MockExam />} />
          <Route path="syllabus" element={<Syllabus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
