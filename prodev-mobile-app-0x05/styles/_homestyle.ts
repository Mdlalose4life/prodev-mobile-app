// @/styles/_homestyle.js

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  
  searchGroup: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },

  searchFormText: {
    fontSize: 14,
    color: "#555",
  },

  searchControl: {
    marginTop: 4,
    fontSize: 16,
    color: "#000",
  },

  searchButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },

  // Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  filterContainer: {
    width: 80,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  // Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
