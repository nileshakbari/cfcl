import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  route: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Daily Data Screen', route: '',
    children: [
      {
        name: 'name', route: '',
        children: [
          {
            name: 'Ammonia', route: '',
            children: [
              { name: 'Ammonia-I', route: '/ammonia-i' },
              { name: 'Ammonia-II', route: '/ammonia-ii' },
              { name: 'Ammonia-III', route: '/ammonia-iii' }
            ]
          },
          {
            name: 'Urea', route: '',
            children: [
              { name: 'Urea-I', route: '/urea-i' },
              { name: 'Urea-II', route: '/urea-i' },
              { name: 'Urea-III', route: '/urea-i' }
            ]
          }],
      },
      { name: 'REPORTS', route: '' },
    ]
  }
];


/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  DBData: any;

  constructor(private router: Router, private service: MenuService) {
    this.service.getData().subscribe(response => {
     const DBData = response;
    }, error => {
      console.error(error);
    });
    this.dataSource.data = this.DBData;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
