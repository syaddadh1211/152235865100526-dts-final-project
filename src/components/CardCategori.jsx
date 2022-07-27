import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import "./style.css";
import gramedia from "../apis/gramedia";

export default function CardCategori() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [categories, setCategories] = React.useState([]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gramedia.get("/categories");

        setCategories(response.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  return (
    <Box
      sx={{
        width: "220px",
        height: "auto",
        variant: "inset",
        paddingLeft: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: "-10px",
        backgroundColor: "rgb(254, 254, 254)",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Kategori Buku" className="category-title" />
        </ListItemButton>
      </List>
      <Divider />
      {categories.map((category) => {
        return (
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
              sx={{
                width: "16vw",
              }}
            >
              <ListItemText primary={category.name} sx={{}} />
            </ListItemButton>
          </List>
        );
      })}
      <Divider />
    </Box>
  );
}
