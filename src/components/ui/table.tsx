import Edit from "../../assets/edit";
import Delet from "../../assets/delet";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TableProps } from "@global";
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { ToastContainer } from "react-toastify";
import Modaldelet from "@modaldelet";
import ModalBrand from "@modalbrands";
import ModalCategory from "@modalcategory";
import ModalSubCategory from "@modalsubcategory";
import { useNavigate } from "react-router-dom";

const GlabalTable = (props: TableProps) => {
  const navigate = useNavigate()
  return (
    <div>
      <ToastContainer />
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHead>
                <TableRow>
                  {props.heders?.map((heder, index) => {
                    return (
                      <TableCell key={index}>
                        <TableSortLabel>{heder.title}</TableSortLabel>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.skelatonLoader ? Array.from(new Array(5)).map((_, index)=>{
                    return <TableRow key={index}>
                      {
                        props.heders?.map((_, index2)=>{
                          return <TableCell key={index2}><Skeleton /></TableCell>
                        })
                      }
                    </TableRow> 
                  })

                    :  props.body?.length > 0 ?  
                    props.body?.map((body, index)=>{
                      return <TableRow key={index}>
                        {
                          props.heders?.map((heder, index2)=>{
                            return <TableCell key={index2}>{
                              heder.value == "action" ? <div className="flex items-center">
                                  <button className=' text-red-500'><Modaldelet id={body?.id} title="brand"/></button>
                                   <ModalBrand title="put" id={body?.id} data={body}/>
                              </div>
                              :heder.value == "action2" ? <div className="flex items-center">
                                 <button className=' text-red-500'><Modaldelet id={body?.id} title="category"/></button>
                                 <ModalCategory  title="put" id={body?.id} data={body}/>
                                 <Button  sx={{color: '#767676' }} onClick={()=>{navigate(`/main/category/${body?.id}`)}}  ><div className=' text-button'><VisibilityIcon/></div></Button>
                              </div>
                              :heder.value == "action3" ? <div className="flex items-center ">
                              <button className=' text-red-500'><Modaldelet id={body?.id} title="category"/></button>
                              <ModalSubCategory title="put" id={body?.id} data={body}/>
                          </div>
                              : heder.value == "t/r" ? <p>{index + 1 }</p>
                              : (body[heder.value])
                            }</TableCell>
                          })
                        }
                      </TableRow>
                    })
                    : <TableRow>
                      <TableCell colSpan={props.heders?.length}>Hech qanday malumot yoq?</TableCell>
                    </TableRow>
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default GlabalTable;