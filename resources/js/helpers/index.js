/**
 * 
 */
import React from "react";

export const renderError = (error) => {
  if (!error) {
    return null;
  }

  return (<div className="text-danger mt-1 ml-2">{error}</div>);
}

export const classList = (classes) => {
  return Object.entries(classes)
    .filter(entry => entry[1])
    .map(entry => entry[0])
    .join(" ");
}