// @/styles/_homestyle.js

import Search from "@/app/(home)/search";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  
  searchGroup: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#34967C",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    paddingHorizontal: 21,
    paddingVertical: 13,
  },

  searchControlGroup: {
    flex:1,
    paddingVertical:1,
    height: 'auto',
    borderRadius: 60,
    justifyContent: 'center'
  },


  searchFormText: {
    fontSize: 12,
    color: "#161117",
    fontWeight: "700"
  },

  searchControl: {
    fontSize: 12,
    color: "#BEBEBE",
    fontWeight: '400'
  },

  searchButton: {
    backgroundColor: "#FFA800",
    padding: 10,
    borderRadius: 60,
    paddingHorizontal:10,
    paddingVertical:10
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
    backgroundColor: "#fffff",
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
