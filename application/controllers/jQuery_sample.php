<?php
/*****************************************************************************
-- jQuery_sample controller class displays the view pages: -------------------
-- example1, example2 and example3. ------------------------------------------
------------------------------------------------------------------------------
-- Author: Irene Gayle Roque -------------------------------------------------
*****************************************************************************/
class jQuery_sample extends CI_Controller{
	
	public function __construct(){
		parent::__construct();
	}
    
    //displays example1 view page
	public function example1($example_no = 1){
		$this->load->helper('url');
		$this->load->view('overall/header');
		$this->load->view('example'.$example_no);
    	$this->load->view('overall/footer');
	}
    
    //displays example2 view page
	public function example2($example_no = 2){
		$this->load->helper('url');
		$this->load->view('overall/header');
		$this->load->view('example'.$example_no);
    	$this->load->view('overall/footer');
	}
    
    //displays example3 view page
	public function example3($example_no = 3){
		$this->load->helper('url');
		$this->load->view('overall/header');
		$this->load->view('example'.$example_no);
    	$this->load->view('overall/footer');
	}

	
}
?>